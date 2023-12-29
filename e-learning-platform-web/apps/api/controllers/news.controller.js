const db = require("../models");
const response = require("../utils/func/response");
const { v4: uuidv4 } = require("uuid");
const filterObjAttribute = require("../utils/func/filterObjAttribute");
const undefinedFunc = require("../utils/func/undefinedFunc");
const toDateFormat = require("../utils/func/toDateFormat");
const nodemailer = require("nodemailer");
const io = require("../server");
const notificationAction = require("../utils/func/action/notificationActions");
const sendGridTransport = require("nodemailer-sendgrid-transport");

const options = {
  auth: {
    api_key: process.env.SENDGRID_API_KEY,
  },
};
const mailer = nodemailer.createTransport(sendGridTransport(options));

const createNews = async (req, res) => {
  const {
    name,
    coverFileName,
    description,
    dueDate,
    type,
    partnerId,
  } = req.body;
  try {
    const newNews = new db.news({
      name,
      coverFileName,
      description,
      dueDate,
      partner: partnerId,
      type: type,
    });
    const data = await newNews.save();
    res
      .status(200)
      .send({ statusCode: 200, message: `Create ${name} successful.` });
  } catch (error) {
    console.log(error);
    res.status(500).send({ statusCode: 500, message: error.message });
  }
};

const findNews = async (req, res) => {
  const { newsId, type } = req.query;
  const page = req.query.page || 1;
  const limit = req.query.limit || 10;
  const disable = req.query.disable || false;
  let pages;
  const query = filterObjAttribute({
    type: undefinedFunc(type),
  });
  console.log({ ...query, disable: undefinedFunc(disable) });
  if (newsId) {
    try {
      const data = await db.news.findById(newsId);
      if (!data) {
        return res.status(404).send({ statusCode: 404, message: `Not found` });
      }
      return res.status(200).send({ statusCode: 200, data });
    } catch (error) {
      console.log(error);
      return res.status(500).send({ statusCode: 500, message: error.message });
    }
  } else {
    try {
      const total = await db.news.countDocuments({
        disable: undefinedFunc(disable),
        ...query,
      });
      if (total % limit == 0) {
        pages = total / limit;
      } else {
        pages = parseInt(total / limit) + 1;
      }
      const skipIndex = (page - 1) * limit;
      const data = await db.news
        .find({ disable: undefinedFunc(disable), ...query })
        .limit(Number(limit))
        .skip(skipIndex);
      response.pagination(res, page, pages, limit, data, total, "news");
    } catch (error) {
      console.log(error);
      return res.status(500).send({ statusCode: 500, message: error.message });
    }
  }
};
const updateNews = async (req, res) => {
  const { newsId } = req.params;
  try {
    const data = await db.news.findByIdAndUpdate(newsId, req.body);
    if (!data) {
      return res.status(404).send({ statusCode: 404, message: `Not found` });
    }
    return res.status(200).send(data);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ statusCode: 500, message: error.message });
  }
};
const deleteNews = async (req, res) => {
  const { newsId } = req.params;
  try {
    const data = await db.news.findByIdAndDelete(newsId);
    if (!data) {
      return res.status(404).send({ statusCode: 404, message: `Not found` });
    }
    return res
      .status(200)
      .send({ statusCode: 200, message: `Delete ${data?.name} successful.` });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ statusCode: 500, message: error.message });
  }
};
const disableNews = async (req, res) => {
  const { newsId } = req.params;
  const status = req.query.status;
  try {
    const data = await db.news.findByIdAndUpdate(
      newsId,
      {
        disable: undefinedFunc(status),
      },
      { new: true }
    );
    if (!data) {
      return res.status(404).send({ statusCode: 404, message: `Not found` });
    }
    let message = undefinedFunc(status) ? "disable." : "restore.";
    return res
      .status(200)
      .send({ statusCode: 200, message: `${data?.name} is ${message}` });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ statusCode: 500, message: error.message });
  }
};

const addSubmission = async (req, res) => {
  const { newsId } = req.params;

  const _id = uuidv4();
  const {
    firstName,
    lastName,
    dateOfBirth,
    currentJob,
    where, //where of the job
    major,
    phoneNumber,
    email,
    address,
    gender,
    whyDoYouWantToJoin,
    firstEssay,
    secondEssay,
    coverFileName,
    yearth,
    cvUrl,
  } = req.body;

  try {
    const data = await db.news.findByIdAndUpdate(newsId, {
      $push: {
        submissions: {
          _id: _id,
          firstName,
          lastName,
          dateOfBirth,
          currentJob,
          where, //where of the job
          major,
          phoneNumber,
          email,
          address,
          gender,
          whyDoYouWantToJoin,
          yearth,
          firstEssay,
          secondEssay,
          coverFileName: coverFileName,
        },
      },
    });

    if (!data) {
      return res.status(404).send({ statusCode: 404, message: `Not found` });
    }

    const brochureUrl =
      "https://drive.google.com/file/d/1n2-lrieMVviLFnWiQFDhALqLl0piuWuQ/view?usp=sharing";
    const FAQUrl =
      "https://drive.google.com/file/d/1jLOFoatDArwXAPXrKupZQ_qFmWZLEjOR/view?usp=sharing";
    const email1 = "schhunheng.it@gmail.com";
    const email2 = "info@sabaicode.com";
    const mailOptions = {
      to: `${email}, ${email1} `,
      from: "sabaicode.dev@gmail.com",
      subject: "2022-2023 SabaiCode Full Stack Web Development Bootcamp",
      text: "Cellcard X SabaiCode",
      html: `  <div style="background-color: #dee6e6; padding: 20px; border-radius: 8px">
    
      <div><b>First Name (នាម)</b>  : ${firstName}</div>
      <div><b>Last Name (គោត្តនាម) </b> : ${lastName}</div>
      <div><b>Date of Birth (ថ្ងៃខែ​ឆ្នាំ​កំណើត)</b> : ${dateOfBirth}</div>
      <div><b>Current Job (មុខរបរ) </b> : ${currentJob}</div>
      <div><b>Where (ឈ្មោះសាលា ឬ កន្លែងការងារ)</b>  : ${where}</div>
      <div><b>Current Year (បច្ចុប្បន្ននិសិត្សឆ្នាំទី)</b>: ${yearth}</div>
      <div><b>Major / Job Title (មុខជំនាញ ឬ មុខងារ)</b>  : ${major}</div>
      <div><b>Phone Number (លេខទូរសព្ទ) </b> : ${phoneNumber}</div>
      <div><b>Email (អ៉ីមែល) </b> : ${email}</div>
      <div><b>Current Address (អាស័យ​ដ្ឋាន​បច្ចុប្បន្ន)</b> : ${address}</div>
      <div><b>Gender (ភេទ)</b>: ${gender}</div>
      <div>
       <b> Write an essay on the topic " Tell us about yourself and why we should
       select you over other people ". You can write in either English or
       Khmer. Max number of words:500. (សរសេរអត្ថបទ៖ ប្រធានបទ
       "ពិពណ៌នាអំពីខ្លួនអ្នក និងមូលហេតុដែលយើងគួរជ្រើសរើសអ្នក ជាងអ្នកផ្សេងទៀត"។
       អត្ថបទអាចសរសេរជាភាសាអង់គ្លេស ឬភាសាខ្មែរ។ ចំនួនអត្ថបទអតិបរមារបស់អ្នក៖
       500។) </b>
      </div>
        <div>
        ${secondEssay}
        </div>
      <div>
        Links :
        <a
          href=${brochureUrl}
          >Brochure</a
        >
        ||
        <a
          href=${FAQUrl}
          >Frequently Ask Questions</a
        > || 
        <a
        href="${cvUrl}"
        >
        Your CV
        </a>
      
      </div>
      <div>

      <p>SabaiCode : <a href="https://sabaicode.com/">https://sabaicode.com/</a></p>
      <p>Email : info@sabaicode.com</p>
      <p>Tel: 078 2171 95, 096 3234 760</p>
      </div>
    </div>`,
    };
    const admins = await db.user.find({ role: "admin" });
    notificationAction.sendNotification(
      undefined,
      admins,
      "submission",
      `${firstName}-${lastName} has submitted ${data.name}`,
      {
        newsId,
      }
    );
    io.emit("notification", {
      data: { message: `${firstName}-${lastName} has submitted ${data.name}` },
    });
    mailer.sendMail(mailOptions, (err, info) => {
      if (err) return res.status(500).send({ statusCode: 500, message: err });
      return res.status(200).send({
        statusCode: 200,
        message: "You're successful subsmission!",
        data,
      });
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ statusCode: 500, message: error.message });
  }
};
const removeSubmission = async (req, res) => {
  const { newsId, submissionId } = req.params;
  try {
    const data = await db.news.findByIdAndUpdate(newsId, {
      $pull: {
        submissions: { _id: submissionId },
      },
    });
    if (!data) {
      return res.status(404).send({ statusCode: 404, message: `Not found` });
    }
    return res
      .status(200)
      .send({ statusCode: 200, message: `Remove submission successful.` });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ statusCode: 500, message: error.message });
  }
};
const findSubmissions = async (req, res) => {
  const { newsId } = req.params;
  const page = req.query.page || 1;
  const limit = Number(req.query.limit) || 15;
  const status = req.query.status || false;
  const allPages = undefinedFunc(req.query.allPages);
  let pages;
  try {
    const data = await db.news.findById(newsId);
    if (!data) {
      return res.status(404).send({ statusCode: 404, message: `Not found` });
    }

    const total = data.submissions.length;

    pages = Math.ceil(total / limit);
    const skipIndex = (page - 1) * limit;
    const dataSubmissions = await db.news.findById(newsId, {
      submissions: {
        $slice: [skipIndex, limit],
      },
    });
    const todaySubmissions = data.submissions.filter((item) => {
      let today = new Date().toISOString();
      // console.log(
      //   toDateFormat(`${today}`),
      //   toDateFormat(item.createdAt),
      //   item.createdAt,
      //   today
      // );
      return (
        toDateFormat(item.createdAt.toISOString()) == toDateFormat(`${today}`)
      );
    });
    const girls = data.submissions.filter((item) => {
      return item.gender == "female";
    });
    const accepteds = data.submissions.filter((item) => {
      return item.ifAccepted == true;
    });
    const checkeds = data.submissions.filter((item) => {
      return item.ifChecked == true;
    });

    if (allPages) {
      return res.status(200).send({
        statusCode: 200,
        today: todaySubmissions.length,
        pages: 0,
        amount: data.submissions.length,
        data: data,
        total,
        girls: girls.length,
        accepteds: accepteds.length,
        checkeds: checkeds.length,
      });
    }

    return res.send({
      statusCode: 200,
      today: todaySubmissions.length,
      pages,
      amount: dataSubmissions.submissions.length,
      data: dataSubmissions,
      total,
      girls: girls.length,
      accepteds: accepteds.length,
      checkeds: checkeds.length,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ statusCode: 500, message: error.message });
  }
};

const updateSubmission = async (req, res) => {
  const { newsId, submissionId } = req.params;
  const { ifChecked, ifAccepted } = req.body;
  let data;
  let message = "";
  try {
    if (undefinedFunc(ifChecked)) {
      data = await db.news.findOneAndUpdate(
        { _id: newsId, "submissions._id": submissionId },
        {
          $set: {
            "submissions.$.ifChecked": true,
          },
        }
      );
      message = "Checked";
    } else if (undefinedFunc(ifAccepted)) {
      data = await db.news.findOneAndUpdate(
        { _id: newsId, "submissions._id": submissionId },
        {
          $set: {
            "submissions.$.ifChecked": true,
            "submissions.$.ifAccepted": true,
          },
        }
      );
      message = "Accepted";
    }

    if (!data) {
      return res.status(404).send({ statusCode: 404, message: `Not found` });
    }

    return res.status(200).send({
      statusCode: 200,
      message: `Application is ${message} successful`,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ statusCode: 500, message: error.message });
  }
};
module.exports = {
  createNews,
  findNews,
  updateNews,
  deleteNews,
  disableNews,
  removeSubmission,
  addSubmission,
  findSubmissions,
  updateSubmission,
};
