import path from "path";

export const product = (req, res) => {
    res.sendFile(path.join(__dirname, '../../dist', 'index.html'));
};
