// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <Comment {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.
import Comment from './Comment'

export const defaultView = () => {
  return (
    <div className="m-4">
      <Comment
        comment={{
          id: 1,
          name: 'Rob Cameron',
          body: 'This is the first comment!',
          createdAt: '2020-01-01T12:34:56Z',
          postId: 1,
        }}
      />
    </div>
  )
}

export const moderatorView = () => {
  mockCurrentUser({
    roles: 'moderator',
  })
  return (
    <div className="m-4">
      <Comment
        comment={{
          id: 1,
          name: 'Rob Cameron',
          body: 'This is the first comment!',
          createdAt: '2020-01-01T12:34:56Z',
          postId: 1,
        }}
      />
    </div>
  )
}

export default { title: 'Components/Comment' }
