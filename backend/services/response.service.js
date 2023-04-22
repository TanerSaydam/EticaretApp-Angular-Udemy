const response = async (res, callBack) => {
    try {
        callBack();
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = response;