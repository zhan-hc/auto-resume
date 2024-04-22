import mitt from 'mitt'
 
type Events = {
  move: any,
  unmove: any
}
const bus = mitt<Events>()
export default bus