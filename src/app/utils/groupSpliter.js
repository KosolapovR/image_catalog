const splitGroup = (images) => {
    const imageMap = {};

    for (let i = 0; i < images.length; i++) {
        if (imageMap[images[i].tag] === undefined) {
            imageMap[images[i].tag] = [];
            imageMap[images[i].tag] = [...imageMap[images[i].tag], images[i].url]
        } else {
            imageMap[images[i].tag] = [...imageMap[images[i].tag], images[i].url];
        }
    }
    return imageMap;
};

export {splitGroup};