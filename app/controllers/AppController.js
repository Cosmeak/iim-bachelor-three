import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

exports.index = () => {
  prisma.games.findMany()
    .then((games) => {
      console.log(games)
    })
    .catch((e) => {
      console.error(e)
    })
}
