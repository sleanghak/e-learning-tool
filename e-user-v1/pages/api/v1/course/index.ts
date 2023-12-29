import { prisma } from "@/config/prisma";
import ReanCodeApi from "@/utils/ReanCodeApi";
import { Ascending, EntryPerPage } from "@/utils/interface/APIContant";
import { Course, Prisma } from "@prisma/client";
import { Verb } from "foundation-ts/tsrequest";
import { NextApiRequest, NextApiResponse } from "next";
import {
  CourseQuery,
  PaginationInterface,
} from "@/utils/interface/APIInterface";
import {
  countPages,
  validateLimit,
  validatePage,
} from "@/utils/common/pagination";
const api = new ReanCodeApi();
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case Verb.Post:
      /**
       * @swagger
       * tags:
       *   - name: Course
       *     description: It is used for course tag
       * /api/v1/course:
       *   post:
       *     description: A test API
       *     tags: [Course]
       *     produces:
       *       - application/json
       *      requestBody:
       *        content:
       *          application/json:
       *            schema:
       *              breweryName: string
       *            example:
       *              breweryName: Creature Comforts Brewing Company
       *     responses:
       *        201:
       *          description: OK
       */
      try {
        const courseInput: Prisma.CourseCreateInput = req.body;
        const course = await prisma.course.create({ data: courseInput });
        api.apiResponse(res, course);
      } catch (error) {
        api.apiError(res, "CREATE_COURSE_ERROR", error);
      }
      break;
    case Verb.Patch:
      try {
        const courseUpdate: Prisma.CourseUpdateInput = req.body;
        await prisma.course.update({
          data: courseUpdate,
          where: {
            id: 1,
          },
        });
      } catch (error) {
        api.apiError(res, "UPDATE_COURSE_ERROR", error);
      }

      break;
    default:
      /**
       * @swagger
       * /api/v1/course:
       *   get:
       *     description: Returns the hello world
       *     responses:
       *       200:
       *         description: hello world
       */
      try {
        const query: CourseQuery = req.query;
        const total = await prisma.course.count();
        const courses = await prisma.course.findMany({
          skip: validatePage(query.page) * validateLimit(query.limit),
          take: validateLimit(query.limit),
          orderBy: {
            createAt: Ascending,
          },
        });
        const response: PaginationInterface<Course> = {
          pages: countPages(total, query.limit!),
          total: total,
          pageNumber: Number(query.page) ?? 1,
          content: courses,
        };
        res.json(response);
      } catch (error) {
        api.logError(error);
        api.apiError(res, "LIST_COURSE_ERROR", error);
      }
  }
}
