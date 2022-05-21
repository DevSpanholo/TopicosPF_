module.exports = (app) => {
    const ObjectId = require('mongodb').ObjectId;
    //rota para listar animais
   app.get('/colaboradores', (req, res) => {
    db.collection('colaborador').find().toArray((err, results)=>{
    if (err) throw err;
    res.json(results);
    });
   });

    ///rota pra inclusao de animal 
   app.post('/colaboradores', (req, res, next) => {
    db.collection('colaborador').insertOne(req.body, (err, result) => {
    if (err) throw err;
    res.json({success: "Incluído com sucesso."});
    })
   });
  
   //atualizando 
   app.put('/colaboradores', (req, res) => {
    var id = ObjectId(req.body._id);
    var newvalues = {$set:{
    nome: req.body.nome,
    tipo: req.body.tipo,
    idade: req.body.idade
    }};
    db.collection('colaborador').updateOne(
    {_id: id},
    newvalues,
    (err, result) => {
    if (err) throw err;
    if (result.modifiedCount < 1)
    return res.json({aviso: "Nada alterado."});
    res.json({success: "Alterado com sucesso."});
    })
   });

   app.delete('/colaboradores/:id', (req, res) => {
    var id = ObjectId(req.params.id);
    db.collection('colaborador').deleteOne({_id: id}, (err, result)=>{
    if (err) throw err;
    if (result.deletedCount < 1)
    return res.json({aviso: "Nada excluído." });
    res.json({success: "Excluído com sucesso." });
    });
   });


   app.get('/colaboradores/:id', (req, res) => {
    var id = ObjectId(req.params.id);
    db.collection('colaborador').findOne({_id: id}, (err, result)=>{
    if (err) throw err;
    res.json(result);
    });
   });

   app.get('/colaboradores/filtro/:valor' , (req, res) => {
    db.collection('colaborador').find({
    $or: [
    { nome: { $regex: req.params.valor, $options: "i" } },
    { tipo: { $regex: req.params.valor, $options: "i" } },
    ],
    }).toArray((err, results)=>{
    if (err) throw err;
    res.json(results);
    });
   });



   }
   