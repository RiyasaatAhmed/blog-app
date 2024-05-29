import { Injectable } from '@nestjs/common';

import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class PostService {
  constructor(private readonly databaseService: DatabaseService) {}

  create(createPostInput: Prisma.PostCreateInput) {
    return this.databaseService.post.create({ data: createPostInput });
  }

  findAll() {
    return this.databaseService.post.findMany();
  }

  findOne(id: number) {
    return this.databaseService.post.findUnique({ where: { id } });
  }

  update(id: number, updatePostInput: Prisma.PostUpdateInput) {
    return this.databaseService.post.update({
      where: { id },
      data: updatePostInput,
    });
  }

  remove(id: number) {
    return this.databaseService.post.delete({ where: { id } });
  }
}
