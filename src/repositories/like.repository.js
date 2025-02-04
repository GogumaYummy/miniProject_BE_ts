const database = require('../config/database');

class LikeRepository {
  existPost = async (postId) => {
    const [[isExist]] = await database.query(`SELECT * FROM Posts WHERE postid=${postId}`);

    return isExist;
  };

  changeLike = async (postId, userId) => {
    try {
      await database.query('INSERT INTO Likes(userId, postId) VALUES (?, ?)', [userId, postId]);
      return true;
    } catch {
      const [result] = await database.query(
        `DELETE FROM Likes where userId=${userId} AND postId=${postId}`
      );
      return false;
    }
  };
}

module.exports = LikeRepository;
