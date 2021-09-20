const Contest = require('../models/contest')

// console.log(contest);

createcontest = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a contest',
        })
    }

    const contest = new Contest(body)

    if (!contest) {
        return res.status(400).json({ success: false, error: err })
    }

    contest
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: contest._id,
                message: 'contest created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'contest not created!',
            })
        })
}

updatecontest = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Contest.findOne({ _id: req.params.id }, (err, contest) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'contest not found!',
            })
        }

        // DESCRIPTION:
        contest.title = body.title

        contest.short_description = body.short_description
        contest.long_description = body.long_description

        // TIMELINE:
        contest.submission_start_date = body.submission_start_date
        contest.submission_end_date = body.submission_end_date

        contest.pre_judging_qa_start_date = body.pre_judging_qa_start_date
        contest.pre_judging_qa_end_date = contest.pre_judging_qa_end_date

        contest.judging_start_date = body.judging_start_date
        contest.judging_end_date = body.judging_end_date

        contest.results_announcement = body.results_announcement

        contest.post_iteration_start_date = body.post_iteration_start_date
        contest.post_iteration_end_date= body.post_iteration_end_date

        contest.date = body.date

        // USERS
        contest.admins = body.admins
        contest.moderators = body.moderators
        contest.contestants = body.contestants
        contest.users = body.users

        contest
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: contest._id,
                    message: 'contest updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'contest not updated!',
                })
            })
    })
}

deletecontest = async (req, res) => {
    await Contest.findOneAndDelete({ _id: req.params.id }, (err, contest) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!contest) {
            return res
                .status(404)
                .json({ success: false, error: `contest not found` })
        }

        return res.status(200).json({ success: true, data: contest })
    }).catch(err => console.log(err))
}

getcontestById = async (req, res) => {
    await Contest.findOne({ _id: req.params.id }, (err, contest) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!contest) {
            return res
                .status(404)
                .json({ success: false, error: `contest not found` })
        }
        return res.status(200).json({ success: true, data: contest })
    }).catch(err => console.log(err))
}

getcontests = async (req, res) => {
    await Contest.find({}, (err, contests) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!contests.length) {
            return res
                .status(404)
                .json({ success: false, error: `contest not found` })
        }
        return res.status(200).json({ success: true, data: contests })
    }).catch(err => console.log(err))
}

module.exports = {
    createcontest,
    updatecontest,
    deletecontest,
    getcontests,
    getcontestById,
}
