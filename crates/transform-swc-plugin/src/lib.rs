use swc_core::{
    ecma::ast::*,
    plugin::{plugin_transform, proxies::TransformPluginProgramMetadata},
};

#[plugin_transform]
pub fn inspector_swc_plugin(
    program: Program,
    _metadata: TransformPluginProgramMetadata,
) -> Program {
    println!("▶ transform-swc-plugin");
    program
}
