import { ParseIntPipe, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { Photo } from '../graphql.schema';
import { PhotoService } from './photo.service';

const pubSub = new PubSub();

@Resolver('Photo')
export class PhotoResolvers {
  constructor(private readonly photoService: PhotoService) {}

  @Query()
  async getPhotos() {
    return await this.photoService.findAll();
  }

  @Query('photo')
  async findOneById(
    @Args('id', ParseIntPipe)
      id: number,
  ): Promise<Photo> {
    return await this.photoService.findOneById(id);
  }

}
