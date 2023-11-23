import { compose } from '@reduxjs/toolkit';
import { withRouter } from './withRouter';
import { withStore } from './withStore';

const withProviders = compose(withRouter, withStore);

export default withProviders;
