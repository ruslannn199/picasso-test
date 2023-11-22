import { compose } from '@reduxjs/toolkit';
import { withRouter } from './withRouter';

const withProviders = compose(withRouter);

export default withProviders;
