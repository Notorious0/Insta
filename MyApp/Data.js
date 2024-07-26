import { faker } from '@faker-js/faker';

export const DATA =Array(20).fill(null).map((e)=>({
      id:faker.string.uuid(),
      name:faker.person.fullName(),
      email:faker.internet.email(),
      avatar: faker.image.avatarGitHub(),
      about: faker.lorem.sentence(),
      followers:faker.number.int() % 500,
      follows:faker.number.int() % 500,
      post: Array(10)
      .fill(null)
      .map((e) => ({
            id:faker.string.uuid(),
            image:faker.image.urlPicsumPhotos(),
      })),
}));