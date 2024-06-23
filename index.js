let express = require(`express`);
let app = express();
let port = 3005;

app.listen(port, function () {
    console.log(`http://localhost:${port}`);
});

// Настройка CORS
let cors = require('cors');
app.use(cors({ origin: 'http://localhost:5173' }));


// Настройка POST-запроса — JSON
app.use(express.json());

// Настройка БД
let mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/online-lessons');

// Схемы

// Пользователь
let userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    phone: {
        unique: true,
        type: String
    },
    email: {
        unique: true,
        type: String
    },
    city: String,
}, {
    timestamps: true
})

let User = mongoose.model('User', userSchema);


// Лекции
let lessonSchema = new mongoose.Schema({
    lessonNumber: {
        unique: true,
        type: Number
    },
    content: String,
    isPassed: Boolean
},)

let Lesson = mongoose.model('lesson', lessonSchema);


// Роуты

app.get('/user', async function (req, res) {
    let user = await User.findOne().sort({ _id: -1 }).limit(1);
    console.log(user);
    res.send(user);
});

app.post('/user/signup', async function (req, res) {
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let phone = req.body.phone;
    let email = req.body.email;
    let city = req.body.city;

    let user = new User({
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        email: email,
        city: city
    })
    await user.save();
    res.send(true);

});

app.get('/lesson', async function (req, res) {
    let lessonNumber = req.query.lessonNumber;
    let lesson = await Lesson.findOne({ lessonNumber: lessonNumber });
    res.send(lesson);
});

app.get('/lessons', async function (req, res) {
    let lessons = await Lesson.find();
    res.send(lessons);
});

