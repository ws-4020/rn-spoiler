// For generating valid codes for type check
// refs: https://github.com/gregberge/svgr/issues/465
function defaultTemplate({template, types: t}, opts, {imports, interfaces, componentName, props, jsx, exports}) {
  props[0] = {
    ...props[0],
    typeAnnotation: t.typeAnnotation(t.genericTypeAnnotation(t.identifier('SvgProps'))),
  };
  const rnsvgImport = imports.filter((i) => i.source.value === 'react-native-svg');
  if (rnsvgImport && rnsvgImport.length > 0) {
    rnsvgImport[0].specifiers.push(t.importSpecifier(t.identifier('SvgProps'), t.identifier('SvgProps')));
  }

  const plugins = ['jsx'];
  if (opts.typescript) {
    plugins.push('typescript');
  }
  const typeScriptTpl = template.smart({plugins});

  return typeScriptTpl.ast`${imports}
${interfaces}
function ${componentName}(${props}) {
  return ${jsx};
}
${exports}
  `;
}
module.exports = defaultTemplate;
