export default {
  analysis: () => import(/* webpackChunkName: 'analysis' */ 'VIEW/Analysis'),
  monitor: () => import(/* webpackChunkName: 'monitor' */ 'VIEW/Monitor'),
  workspace: () => import(/* webpackChunkName: workspace */ 'VIEW/Workspace')
}
