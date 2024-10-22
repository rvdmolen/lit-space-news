export const LoadingMixin = (superClass) => class extends superClass {

  get _loadingElement() {
    return this.shadowRoot.getElementById('overlay-dialog');
  }

  __showLoading() {
    this._loadingElement.show({
      'spinnerColor': '#6120d0',
    });
  }

  __hideLoading() {
    this._loadingElement.hide();
  }
};
