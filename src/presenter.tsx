import React from 'react';
import { observer } from 'mobx-react';
import { IReactComponent } from 'mobx-react/dist/types/IReactComponent';

export interface presenterProps<PM = any> {
  pm: PM,
}

export const presenter = (Presenter: any, View: IReactComponent) => {
  const Component = observer(View);

  class WrappedView extends React.Component {
    private pm: any;

    constructor(props: any) {
      super(props);
      this.pm = new Presenter(props);
    }

    render() {
      return (
        <>
          <Component {...this.props} pm={this.pm} />
        </>
      );
    }
  }

  return WrappedView;
};
