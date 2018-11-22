import path from "path";

export const home = (req, res) => {
    res.sendFile(path.join(__dirname, '../../dist', 'index.html'));
};
