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
      res.status(200).json({
        success: true,
        message: "File uploaded successfully",
        name: req.file.filename,
        path: req.file.path,
      });
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, error: "Failed to upload file" });
  }
}
