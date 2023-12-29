import { $ok } from "foundation-ts/commons";
import GenericLog from "./GenericLog";
import { v2 as cloudinary } from "cloudinary";
import { unlinkSync } from "fs";
interface CloudinaryType {
  cloudName: string;
  apiKey: string;
  apiSecret: string;
}

export interface IResponse {
  isSuccess: boolean;
  message: string;
  statusCode: number;
}
export interface ICloudinaryResponse extends IResponse {
  imageURL?: string;
}

export interface ICloudinary {
  uploadImage: (imageToUpload: string) => Promise<ICloudinaryResponse>;
}
export default class CloudinaryService
  extends GenericLog
  implements ICloudinary
{
  private static cloudinary: CloudinaryService;
  private cloudName: string;

  constructor({ cloudName, apiKey, apiSecret }: CloudinaryType) {
    super();
    cloudinary.config({
      cloud_name: cloudName,
      api_key: apiKey,
      api_secret: apiSecret,
    });
    this.cloudName = cloudName;
  }

  public static cloudinaryService(conf?: CloudinaryType): CloudinaryService {
    let config: CloudinaryType | undefined = undefined;
    if (CloudinaryService.cloudinary) {
      if ($ok(config)) {
        config = {
          cloudName: conf?.cloudName!,
          apiKey: conf?.apiKey!,
          apiSecret: conf?.apiSecret!,
        };
      }
      CloudinaryService.cloudinary = new CloudinaryService(config!);
    }
    return CloudinaryService.cloudinary;
  }

  uploadImage = async (imageToUpload: string): Promise<ICloudinaryResponse> => {
    try {
      const cloudinaryImageUploadResponse = await cloudinary.uploader.upload(
        imageToUpload,
        {
          public_id: this.cloudName,
        }
      );

      const { url } = cloudinaryImageUploadResponse;

      if (!url) {
        unlinkSync(imageToUpload);
        return {
          isSuccess: false,
          message:
            "Couldn't upload your image at the moment. Please try again later.",
          statusCode: 400,
        };
      }

      unlinkSync(imageToUpload);
      return {
        isSuccess: true,
        message: "Successfully uploaded image.",
        statusCode: 200,
        imageURL: url,
      };
    } catch (error) {
      unlinkSync(imageToUpload);
      return {
        isSuccess: false,
        message: "Internal Server Error",
        statusCode: 500,
      };
    }
  };
}
