export const LoadingMixin = (superClass) => class extends superClass {

  get _loadingElement() {
    return this.shadowRoot.getElementById('overlay-dialog');
  }

  showLoading() {
    this._loadingElement.show({
      'spinnerColor': '#6120d0',
    });
  }

  hideLoading() {
    this._loadingElement.hide();
  }
};
