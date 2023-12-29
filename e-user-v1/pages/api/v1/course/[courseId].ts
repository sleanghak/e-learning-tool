import { prisma } from "@/config/prisma";
import ReanCodeApi from "@/utils/ReanCodeApi";
import { Prisma } from "@prisma/client";
import { Verb } from "foundation-ts/tsrequest";
import { NextApiRequest, NextApiResponse } from "next";
const api = new ReanCodeApi();
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { courseId } = req.query;
  api.log(req.method);
  if (req.method == Verb.Put) {
    try {
      const courseUpdate: Prisma.CourseUpdateInput = req.body;
      const updatedCourse = await prisma.course.update({
        data: courseUpdate,
        where: {
          id: Number(courseId),
        },
      });
      api.apiResponse(res, updatedCourse);
    } catch (error) {
      api.apiError(res, "UPDATE_COURSE_ERROR", error);
    }
  } else if (req.method == Verb.Delete) {
    try {
      await prisma.course.delete({
        where: {
          id: Number(courseId),
        },
      });
      api.apiResponse(res, "Success Deleted");
    } catch (error) {
      api.apiResponse(res, "Success Deleted");
      api.logError(error);
    }
  }
}
