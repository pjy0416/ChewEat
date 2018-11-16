import path from "path";

export const community= (req, res) => {
    res.sendFile(path.join(__dirname, '../../dist', 'index.html'));
};
