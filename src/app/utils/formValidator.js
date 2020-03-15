const required = (values) => {
    return !values ? 'Заполните тег' : undefined;
};

export {required};