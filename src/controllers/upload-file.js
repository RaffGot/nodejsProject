const File = require('../models/files');
const { s3Upload, s3Delete, s3Update } = require('../services/s3service');

const uploadFile = async (req, res) => {
  const { file } = await req;
  const result = await s3Upload(file);
  const filePath = new File({
    path: result.Location,
    originalname: file.originalname,
  });
  await filePath.save();
  return res.json({
    data: result,
    message: 'File uploaded in s3 bucket succusfully ',
  });
};

// delete file from s3 bucket
const deleteFile = async (req, res) => {
  const { id } = req.params;
  const file = await File.findByIdAndDelete(id);
  const result = await s3Delete(file);
  return res.json({ data: result, message: 'File deleted from s3 bucket' });
};

// update file from s3 bucket
const updateFile = async (req, res) => {
  const { id } = req.params;
  const { file } = req;
  const matchfile = await File.findById(id);
  const result = await s3Upload(file);
  await File.findByIdAndUpdate(id, {
    path: result.Location,
    originalname: file.originalname,
  });
  await s3Delete(matchfile);
  return res.json({
    data: result,
    message: 'File updated in s3 bucket succusfully ',
  });
};

module.exports = { uploadFile, deleteFile, updateFile };
