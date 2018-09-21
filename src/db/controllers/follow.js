import ErrorLogger from 'lib/classes/error'
import Follow from 'db/follow'

class FollowController {
  static async add(data: FollowFields) {
    const { follower, following } = data

    const followExisted = await Follow.findOne({ follower, following })
    if (!followExisted) {
      throw new ErrorLogger('follow.add.existed')
    }

    const followAdded = await Follow.create({ follower, following })
    if (!followAdded) {
      throw new ErrorLogger('follow.add.insertFailed')
    }

    return followAdded
  }

  static async remove(data: FollowFields) {
    const { follower, following } = data

    const followExisted = await Follow.findOne({ follower, following })
    if (!followExisted) {
      throw new ErrorLogger('follow.remove.notExisted')
    }

    const followDeleted = await Follow.deleteOne({ follower, following })
    if (!followDeleted) {
      throw new ErrorLogger('follow.remove.removeFailed')
    }

    return followDeleted
  }
}

export default FollowController
