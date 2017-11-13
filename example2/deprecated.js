export default (fileInfo, api) => {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

  const importDeclaration = root.find(j.ImportDeclaration, {
    source: {
      type: 'Literal',
      value: 'geometry',
    },
  });

  // find the Identifiers
  const identifierCollection = importDeclaration.find(j.Identifier);

  // get the first NodePath from the Collection
  const nodePath = identifierCollection.get(0);
  // get the Node in the NodePath and grab its "name"
  const localName = nodePath.node.name;

  root
    .find(j.MemberExpression, {
      object: {
        name: localName,
      },
      property: {
        name: 'circleArea',
      },
    })

    .replaceWith(nodePath => {
      // get the underlying Node
      const { node } = nodePath;
      // change to our new prop
      node.property.name = 'getCircleArea';
      // replaceWith should return a Node, not a NodePath
      return node;
    });

  return root.toSource();
};
