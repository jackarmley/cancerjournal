class AppointmentResource < JSONAPI::Resource

  attributes :start_time, :end_time, :appointment_type, :subject, :body

  has_one :user

end
