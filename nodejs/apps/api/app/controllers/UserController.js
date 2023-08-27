const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

/**
 * Create a user with a pseudo and the game id
 * @param {*} req
 * @param {*} res
 */
exports.create = async (req, res) => {
  // find the game
  const game = await prisma.games.findFirst({
    where: {
      status: true
    }
  })

  // Create the new user who register his pseudo
  console.log(req.body)
  const user = await prisma.users.create({
    data: {
      pseudo: req.body.pseudo,
      game: {
        connect: { id: game.id }
      },
      status: true
    }
  })

  console.log(user)

  // Response with the new user create
  res.status(200).json({
    data: user
  })
}
