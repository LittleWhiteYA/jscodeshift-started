export default (fileInfo, api) => {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

  const newActions = j.objectExpression([
    j.property('init', j.identifier('method'), j.literal('sendText')),
    j.property(
      'init',
      j.identifier('args'),
      j.arrayExpression([j.literal('yoooooo world'), j.literal('second time')])
    ),
  ]);

  return root
    .find(j.Property, {
      key: {
        type: 'Identifier',
        name: 'actions',
      },
    })
    .replaceWith(nodePath => {
      const { node } = nodePath;

      node.value.elements.push(newActions);

      return node;
    })
    .toSource();
};
