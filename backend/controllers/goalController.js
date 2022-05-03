const getGoals = (req,res) => {
    res.json({message : "yo"});
}

const setGoals = (req,res) => {
    res.json({message : "set message"});
}

const updateGoal = (req,res) => {
    res.json({message : `goal ${req.params.id}`});
}

const deleteGoal = (req,res) => {
    res.json({message : `delete goal ${req.params.id}`});
}

module.exports = {
    getGoals,
    setGoals,
    updateGoal,
    deleteGoal
}