import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Photo } from './photo.entity';

@Injectable()
export class PhotoService {
  constructor(
    @InjectRepository(Photo)
    private readonly photoRepository: Repository<Photo>,
  ) {}

  async findAll(): Promise<Photo[]> {
    return await this.photoRepository.find();
  }

  async create(): Promise<Photo> {
    // const createdPost = new this.photoRepository({name: 'asd'});
    const createdPhoto = new Photo();
    createdPhoto.name = 'Test1';
    createdPhoto.description = 'descr';
    createdPhoto.filename = 'descr';
    createdPhoto.isPublished = true;
    createdPhoto.views = 123;
    return await this.photoRepository.save(createdPhoto);
  }
}
