// pages/api/upload.js

import { upload } from "@/middleware/uploadMiddleware";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: any, res: any) {
  try {
    upload.single("file")(req, res, () => {
      console.log("ffffffffffffffffffff", req.file);
      res.status(200).json({
        success: true,
        message: "File uploaded successfully",
        name: req.file.filename,
        path: req.file.path,
      });
    });
    // const uploadedImagePath = req.img.path;
  } catch (error) {
    res
      .status(500)
      .json({ success: false, error: "bbbbbbbbbb Failed to upload file" });
  }
}
