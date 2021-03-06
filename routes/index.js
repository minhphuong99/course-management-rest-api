const
  router = require('express').Router(),
  classesRouter = require('./classes'),
  { requireLogin, decentralization } = require('./middlware/authentication'),
  userRouter = require('./users'),
  postRouter = require('./posts'),
  attachmentRouter = require('./attachments'),
  modulesRouter = require('./modules'),
  exercisesRouter = require('./exercises');
router.post('/success', (req, res, next) => {
  res.status(200).send("oke")
})
router.use('/users', requireLogin, userRouter())
router.use('/attachments', requireLogin, attachmentRouter())
router.use('/classes', requireLogin, classesRouter());
router.use('/posts', requireLogin, postRouter());
router.use('/modules', requireLogin, modulesRouter());
router.use('/exercises', requireLogin, exercisesRouter());
router.get('/:code', (req, res) => {
  res.status(200).send(req.params.code)
})

module.exports = router;
