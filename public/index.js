import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));

const posts = [];
app.use(express.static(path.join(process.cwd(), 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(process.cwd(), 'public', 'views'));

app.get('/', (req, res) => {
    res.render('index', { posts, error: null, prevTitle: '', prevBody: '' });
});
app.post('/compose', (req, res) => {
    const postTitle = (req.body.postTitle || '').trim();
    const postBody = (req.body.postBody || '').trim();
    const editId = typeof req.body.editId !== 'undefined' && req.body.editId !== '' ? Number(req.body.editId) : null;


    if (!postTitle || !postBody) {
        const error = 'Both title and body are required.';
        console.warn('Validation failed:', { postTitle, postBody });
        return res.status(400).render('index', { posts, error, prevTitle: postTitle, prevBody: postBody, editId });
    }

    if (editId !== null && Number.isInteger(editId) && posts[editId]) {
        posts[editId] = { title: postTitle, body: postBody };
        console.log(`Post ${editId} updated.`);
    } else {
        posts.push({ title: postTitle, body: postBody });
        console.log('New post created.');
    }

    res.redirect('/');
});


app.get('/edit/:postId', (req, res) => {
    const postId = Number(req.params.postId);
    const post = posts[postId];
    if (!post) {
        return res.status(404).send('Post not found');
    }
    res.render('index', { posts, error: null, prevTitle: post.title, prevBody: post.body, editId: postId });
});


app.post('/delete/:postId', (req, res) => {
    const postId = Number(req.params.postId);
    if (!Number.isInteger(postId) || !posts[postId]) {
        return res.status(404).send('Post not found');
    }
    posts.splice(postId, 1);
    console.log(`Post ${postId} deleted.`);
    res.redirect('/');
});

app.get('/posts/:postId', (req, res) => {
    const postId = Number(req.params.postId);
    const post = posts[postId];
    if (!post) {
        return res.status(404).send('Post not found');
    }
    res.render('post', { post });
});

app.listen(PORT, () => {
    console.log(`Server started on port http://localhost:${PORT}`);
});
