
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cat } from './schema/cat.schema';
@Injectable()
export class CatService {
  constructor(@InjectModel('Cat') private readonly catModel: Model<Cat>) {}

  // Create a new Cat
  async create(cat: Cat): Promise<Cat> {
    return await this.catModel.create(cat);
  }

  // Get all Cats
  async getAll(): Promise<Cat[]> {
    return await this.catModel.find();
  }

  // Get a Cat by ID
  async getById(id: string): Promise<Cat | null> {
    return await this.catModel.findById(id);
  }

  // Update a Cat
  async update(id: string, updates: Partial<Cat>): Promise<Cat | null> {
    return await this.catModel.findByIdAndUpdate(id, updates, { new: true });
  }

  // Delete a Cat
  async delete(id: string): Promise<void> {
    await this.catModel.findByIdAndDelete(id);
  }
}
