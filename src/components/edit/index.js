import React, { Fragment } from 'react'
import Paper from '@material-ui/core/Paper'
import withStyles from '@material-ui/core/styles/withStyles'
import { withRouter } from 'react-router'
import styles from './styles'
<<<<<<< HEAD

const EditBook = ({ classes }) => {
=======
import { connect } from 'react-redux'
import { editBook } from './actions'

const EditBook = ({ classes, history }) => {
  const { bookId } = history.location.state
>>>>>>> upstream/07-formik-forms
  return (
    <Fragment>
      <div className={classes.container}>
        <Paper elevation={1} className={classes.paper}>
<<<<<<< HEAD
          <h1>Book Editing Form for book id -add here id-</h1>
=======
        <h1>Book Editing Form for book id {bookId}</h1>
>>>>>>> upstream/07-formik-forms
        </Paper>
      </div>
    </Fragment>
  )
}
<<<<<<< HEAD

export default withRouter(withStyles(styles)(EditBook))
=======
const mapDispatchToProps = dispatch => ({
  editBook: (url, values, history) => dispatch(editBook(url, values, history)),
})

export default connect(
  null,
  mapDispatchToProps
)(withRouter(withStyles(styles)(EditBook)))
>>>>>>> upstream/07-formik-forms
