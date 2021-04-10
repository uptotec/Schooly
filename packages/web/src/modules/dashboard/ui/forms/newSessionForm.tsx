import * as React from 'react';
import {
  Form,
  Select,
  Radio,
  DatePicker,
  TimePicker,
  Input,
  message,
} from 'antd';
import { FormikProps, withFormik } from 'formik';
import {
  newSessionControllerValues,
  newSessionControllerData,
  useStaffStore,
} from '@schooly/controller';

export const NewSessionFormFields: React.FunctionComponent<
  FormikProps<newSessionControllerValues> & newSessionControllerData
> = (props) => {
  const teacherEnrollments = useStaffStore(
    (state) => state.meStaff?.teacherEnrollments
  );
  const teacherAssistantEnrollments = useStaffStore(
    (state) => state.meStaff?.teacherAssistantEnrollments
  );
  const enrollments = [...teacherEnrollments!, ...teacherAssistantEnrollments!];

  const [conference, setConference] = React.useState(false);

  if (!props.loading && props.data && props.data.createSession) {
    message.success('new session created');
  }

  return (
    <div>
      <form onSubmit={props.handleSubmit} id="createSessionForm">
        <Form.Item label="course">
          <Select
            onChange={(value) => props.setFieldValue('enrollmentId', +value)}
            style={{ width: 400 }}
            placeholder="course"
          >
            {enrollments.map((enrollment) => (
              <Select.Option
                value={`${enrollment.enrollmentId}`}
                key={enrollment.enrollmentId}
              >
                {`${enrollment.course.name} (${
                  enrollment.enrollmentType === 'class'
                    ? `class ${
                        enrollment.class?.department ||
                        enrollment.class?.facility.name
                      }`
                    : `${
                        enrollment.group?.class.department ||
                        enrollment.group?.class.facility.name
                      } group ${enrollment.group?.name}`
                })`}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item label="session type">
          <Radio.Group
            onChange={props.handleChange}
            name="type"
            defaultValue={props.initialValues.type}
            buttonStyle="solid"
          >
            <Radio.Button value="lecture">Lecture</Radio.Button>
            <Radio.Button value="tutorial">Tutorial</Radio.Button>
            <Radio.Button value="lab">Lab</Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="location">
          <Radio.Group
            onChange={props.handleChange}
            name="online"
            defaultValue={props.initialValues.online}
          >
            <Radio value={true}>Online</Radio>
            <Radio value={false}>OnCampus</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="recurring">
          <Radio.Group
            onChange={props.handleChange}
            name="recurring"
            defaultValue={props.initialValues.recurring}
          >
            <Radio value={true}>every week</Radio>
            <Radio value={false}>one time</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="date">
          <DatePicker
            disabled={props.values.recurring}
            popupStyle={{ background: 'white' }}
            onChange={(_, date) => props.setFieldValue('date', date)}
            name="date"
          />
        </Form.Item>

        <Form.Item label="day">
          <Select
            onChange={(value) => props.setFieldValue('day', value)}
            style={{ width: 320 }}
            placeholder="day"
            disabled={!props.values.recurring}
          >
            <Select.Option value="sat">saturday</Select.Option>
            <Select.Option value="sun">sunday</Select.Option>
            <Select.Option value="mon">monday</Select.Option>
            <Select.Option value="tue">tuesday</Select.Option>
            <Select.Option value="wed">wednesday</Select.Option>
            <Select.Option value="thu">thursday</Select.Option>
            <Select.Option value="fri">friday</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="start time">
          <TimePicker
            popupStyle={{ background: 'white' }}
            use12Hours
            format="h:mm a"
            onChange={(_, time) => props.setFieldValue('start_time', time)}
          />
        </Form.Item>

        <Form.Item label="duration">
          <TimePicker
            popupStyle={{ background: 'white' }}
            format="h:mm"
            showNow={false}
            onChange={(_, time) => {
              const times = time.split(':');
              props.setFieldValue('duration_mins', 60 * +times[0] + +times[1]);
            }}
          />
        </Form.Item>

        <Form.Item label="video conference">
          <Radio.Group
            onChange={(e) => setConference(e.target.value)}
            defaultValue={false}
            disabled={!props.values.online}
          >
            <Radio value={false}>I-Learn session</Radio>
            <Radio value={true}>external session</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="link">
          <Input
            onChange={props.handleChange}
            name="joinLink"
            disabled={!conference}
          />
        </Form.Item>
      </form>
    </div>
  );
};

export const NewSessionForm = withFormik<
  newSessionControllerData,
  newSessionControllerValues
>({
  // mapPropsToValues: () => ({
  //   enrollmentId: 0,
  //   type: 'lecture',
  //   online: true,
  //   recurring: true,
  //   date: null,
  //   day: null,
  //   start_time: '',
  //   duration_mins: 0,
  //   joinLink: null,
  // }),
  handleSubmit: async (values, { props }) => {
    props.submit(values);
  },
})(NewSessionFormFields);
