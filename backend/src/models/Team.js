import db from '../config/database.js';

class Team {
  static getAll(callback) {
    const sql = 'SELECT * FROM team_members ORDER BY id';
    db.query(sql, callback);
  }

  static create(teamData, callback) {
    const sql = 'INSERT INTO team_members (name, image, type, description) VALUES (?, ?, ?, ?)';
    db.query(sql, [teamData.name, teamData.image, teamData.type, teamData.description], callback);
  }

  static update(id, teamData, callback) {
    const sql = 'UPDATE team_members SET name = ?, image = ?, type = ?, description = ? WHERE id = ?';
    db.query(sql, [teamData.name, teamData.image, teamData.type, teamData.description, id], callback);
  }

  static delete(id, callback) {
    const sql = 'DELETE FROM team_members WHERE id = ?';
    db.query(sql, [id], callback);
  }
}

export default Team;