export function render(Render: any) {
  window.apiready = () => {
    Render()
  }
}
