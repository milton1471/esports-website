import Team from '../models/Team.js';

const teamController = {
  getAllMembers: (req, res) => {
    Team.getAll((err, results) => {
      if (err) {
        console.error('Error fetching team members:', err);
        return res.status(500).json({ error: 'Error fetching team members' });
      }
      res.json(results);
    });
  },

  createMember: (req, res) => {
    const teamData = req.body;
    Team.create(teamData, (err, results) => {
      if (err) {
        console.error('Error creating team member:', err);
        return res.status(500).json({ error: 'Error creating team member' });
      }
      res.status(201).json({ 
        message: 'Team member created successfully', 
        id: results.insertId 
      });
    });
  },

  updateMember: (req, res) => {
    const { id } = req.params;
    const teamData = req.body;
    Team.update(id, teamData, (err, results) => {
      if (err) {
        console.error('Error updating team member:', err);
        return res.status(500).json({ error: 'Error updating team member' });
      }
      res.json({ message: 'Team member updated successfully' });
    });
  },

  deleteMember: (req, res) => {
    const { id } = req.params;
    Team.delete(id, (err, results) => {
      if (err) {
        console.error('Error deleting team member:', err);
        return res.status(500).json({ error: 'Error deleting team member' });
      }
      res.json({ message: 'Team member deleted successfully' });
    });
  }
};

export default teamController;