const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const grayMatter = require('gray-matter');

const app = express();
app.use(cors());

app.get('/api/math/:id', async (req, res) => {
  const { id } = req.params;
  const filePath = path.join(__dirname, 'public', 'Articles', `math${id}.md`);

  console.log('Fetching article:', filePath);

  try {
    const data = await fs.promises.readFile(filePath, 'utf8');
    const { data: metadata, content } = grayMatter(data);
    
    const { remark } = await import('remark'); // Dynamic import
    const remarkHtml = (await import('remark-html')).default;

    const htmlContent = await remark().use(remarkHtml).process(content);

    res.json({
      title: metadata.title,
      date: metadata.date,
      content: htmlContent.toString(),
    });
  } catch (err) {
    console.error('Error reading or processing article:', err);
    res.status(404).json({ error: 'Article not found' });
  }
});

app.get('/api/lifestyle/:id', async (req, res) => {
  const postId = req.params.id;
  const postPath = path.join(__dirname, 'public', `Articles/lifestyle${postId}.html`);

  res.sendFile(postPath);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
