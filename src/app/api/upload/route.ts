import { NextRequest, NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const files = formData.getAll('files') as File[];
    
    if (!files || files.length === 0) {
      return NextResponse.json(
        { success: false, message: 'No files uploaded' },
        { status: 400 }
      );
    }
    
    const uploadedFiles = [];
    
    for (const file of files) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      
      // Create a unique filename
      const originalName = file.name;
      const extension = path.extname(originalName);
      const fileName = `${uuidv4()}${extension}`;
      
      // Define the upload path - store in public directory
      const uploadDir = path.join(process.cwd(), 'public', 'uploads');
      const filePath = path.join(uploadDir, fileName);
      
      // Write the file
      await writeFile(filePath, buffer);
      
      // Store the path that will be accessible from the frontend
      const publicPath = `/uploads/${fileName}`;
      uploadedFiles.push(publicPath);
    }
    
    return NextResponse.json(
      { success: true, data: uploadedFiles },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error uploading files:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to upload files' },
      { status: 500 }
    );
  }
}
