const responsibleData = require('../data/responsibleData');

exports.saveResponsible = (responsible) => {
    return responsibleData.saveResponsible(responsible);
}

exports.getResponsibles = () => {
    return responsibleData.getResponsibles();
}

exports.getResponsibleById = (id) => {
    return responsibleData.getResponsibleById(id);
}

exports.deleteResponsible = (id) =>  {
    return responsibleData.deleteResponsible(id);
}

exports.updateResponsible = (responsible) => {
    return responsibleData.updateResponsible(responsible);
}