import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Product from '@/models/Product';
import { getMockProductById } from '@/data/mockProducts';

// GET a single product by ID
export async function GET(
  req: NextRequest,
  { params }: { params: { productId: string } }
) {
  try {
    // Connect to database with better error handling
    try {
      await connectToDatabase();
    } catch (dbError: any) {
      console.error('MongoDB connection error:', dbError);
      
      // In development mode, fall back to mock data
      if (process.env.NODE_ENV === 'development') {
        console.log('Falling back to mock product data');
        const mockProduct = getMockProductById(params.productId);
        
        if (mockProduct) {
          return NextResponse.json({ success: true, data: mockProduct });
        }
        
        return NextResponse.json(
          { success: false, error: 'Product not found in mock data' },
          { status: 404 }
        );
      }
      
      return NextResponse.json(
        { 
          success: false, 
          error: 'Database connection failed. Please try again later.',
          details: process.env.NODE_ENV === 'development' ? dbError.message : undefined
        },
        { status: 503 }
      );
    }
    
    // Add timeout to prevent long-running queries
    const product = await Promise.race([
      Product.findOne({ productId: params.productId })
        .lean()
        .exec(),
      new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Database query timeout')), 10000)
      )
    ]);

    if (!product) {
      return NextResponse.json(
        { success: false, error: 'Product not found' },
        { status: 404 }
      );
    }

    // Update visit count for trending products
    try {
      await Product.findOneAndUpdate(
        { productId: params.productId },
        { 
          $inc: { visitCount: 1 },
          $set: { lastVisited: new Date() }
        }
      ).exec();
    } catch (visitError) {
      console.error('Error updating visit count:', visitError);
      // Continue anyway, this is not critical
    }

    return NextResponse.json({ success: true, data: product });
  } catch (error: any) {
    console.error('Error in GET /api/products/[productId]:', error);
    
    // In development mode, fall back to mock data
    if (process.env.NODE_ENV === 'development') {
      console.log('Falling back to mock product data after error');
      const mockProduct = getMockProductById(params.productId);
      
      if (mockProduct) {
        return NextResponse.json({ success: true, data: mockProduct });
      }
    }
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch product',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}

// PUT update a product
export async function PUT(
  req: NextRequest,
  { params }: { params: { productId: string } }
) {
  try {
    const data = await req.json();
    
    // Connect to database with better error handling
    try {
      await connectToDatabase();
    } catch (dbError: any) {
      console.error('MongoDB connection error:', dbError);
      return NextResponse.json(
        { 
          success: false, 
          error: 'Database connection failed. Please try again later.',
          details: process.env.NODE_ENV === 'development' ? dbError.message : undefined
        },
        { status: 503 }
      );
    }
    
    // Add timeout to prevent long-running queries
    const product = await Promise.race([
      Product.findOneAndUpdate(
        { productId: params.productId },
        { $set: data },
        { new: true, runValidators: true }
      ).exec(),
      new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Database query timeout')), 10000)
      )
    ]);

    if (!product) {
      return NextResponse.json(
        { success: false, error: 'Product not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: product });
  } catch (error: any) {
    console.error('Error in PUT /api/products/[productId]:', error);
    
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map((err: any) => err.message);
      return NextResponse.json(
        { 
          success: false, 
          error: validationErrors.join(', '),
          details: process.env.NODE_ENV === 'development' ? error.message : undefined
        },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to update product',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}

// DELETE a product
export async function DELETE(
  req: NextRequest,
  { params }: { params: { productId: string } }
) {
  try {
    // Connect to database with better error handling
    try {
      await connectToDatabase();
    } catch (dbError: any) {
      console.error('MongoDB connection error:', dbError);
      return NextResponse.json(
        { 
          success: false, 
          error: 'Database connection failed. Please try again later.',
          details: process.env.NODE_ENV === 'development' ? dbError.message : undefined
        },
        { status: 503 }
      );
    }
    
    // Add timeout to prevent long-running queries
    const product = await Promise.race([
      Product.findOneAndDelete({ productId: params.productId }).exec(),
      new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Database query timeout')), 10000)
      )
    ]);

    if (!product) {
      return NextResponse.json(
        { success: false, error: 'Product not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: {} });
  } catch (error: any) {
    console.error('Error in DELETE /api/products/[productId]:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to delete product',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}
