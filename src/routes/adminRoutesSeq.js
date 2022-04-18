const { Router } = require('express');
const express = require('express');
const router = express.Router();
const path = require('path');
const controllerAdminSeq = require('../controllers/controllerAdminSeq');
const multer = require('multer');

var storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, 'public/images/')
    },
    filename: function(req,file,cb){
        cb(null, 'Vino-' + Date.now() + path.extname(file.originalname))
    }
})
var upload = multer({storage: storage})


router.get('/', controllerAdminSeq.index);

router.get('/create', controllerAdminSeq.create);
router.post('/create', upload.single('image'), controllerAdminSeq.save);
router.get('/detail/:id', controllerAdminSeq.show);

/*
router.get('/edit/:id', controllerAdmin.edit);
router.put('/edit/:id', upload.single('image'), controllerAdmin.update);
router.get('/delete/:id', controllerAdmin.destroy);
*/

module.exports = router;