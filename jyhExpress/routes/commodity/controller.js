import path from "path";

export const depthTwo = (req, res) => {
    res.sendFile(path.join(__dirname, '../../dist', 'index.html'));
};

export const depthOne = (req, res) => {
    res.sendFile(path.join(__dirname, '../../dist', 'index.html'));
};
