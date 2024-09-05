// src/api/api.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateApiDto } from './dto/create-api.dto';
import { UpdateApiDto } from './dto/update-api.dto';

@Injectable()
export class ApiService {
  constructor(private prisma: PrismaService) {}

  async create(createApiDto: CreateApiDto) {
    try {
      return await this.prisma.api.create({
        data: {
          name: createApiDto.name,
          email: createApiDto.email,
        },
      });
    } catch (error) {
      console.error('Error creating API:', error);
      throw error;
    }
  }

  async findAll() {
    try {
      return await this.prisma.api.findMany();
    } catch (error) {
      console.error('Error finding all APIs:', error);
      throw error;
    }
  }

  // Read one
  async findOne(id: number) {
    try {
      return await this.prisma.api.findUnique({
        where: { id },
      });
    } catch (error) {
      console.error('Error finding API by id:', error);
      throw error;
    }
  }

  // Update
  async update(id: number, updateApiDto: UpdateApiDto) {
    try {
      return await this.prisma.api.update({
        where: { id },
        data: {
          name: updateApiDto.name,
          email: updateApiDto.email,
        },
      });
    } catch (error) {
      console.error('Error updating API:', error);
      throw error;
    }
  }

  // Delete
  async remove(id: number) {
    try {
      return await this.prisma.api.delete({
        where: { id },
      });
    } catch (error) {
      console.error('Error deleting API:', error);
      throw error;
    }
  }
}


