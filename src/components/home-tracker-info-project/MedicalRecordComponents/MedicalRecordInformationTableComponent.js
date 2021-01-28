import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import MedicalRecordServices from '../../services/MedicaRecordsServices';
import { forwardRef } from 'react';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import Axios from 'axios';
import Box from '@material-ui/core/Box';
import ExportMedicalRecordCSV from './ExportMedicalRecordCSV';
import { Col,Row } from 'react-bootstrap';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

export default function MedicalRecordInformationTableComponent() {
  const [state] = React.useState({
    columns: [
      { title: 'Medical Record ID', field: 'medicalRecordId', hidden: true },
      { title: 'Doctor Office ID', field: 'doctorOfficeId' },
      { title: 'Person ID', field: 'personid' },
      { title: 'Amount', field: 'amount' },
      { title: 'Doctor Name', field: 'doctorName' },
      { title: 'Description', field: 'description'}
    ],
  });

  const [entries, setEntries] = useState({
    data: [
      {
        medicalRecordId: 0,
        doctorOfficeId: 0,
        personid: 0,
        amount: 0,
        doctorName: "",
        description: ""
      }
    ]
  });

  const [fileName, setFileName] = useState("Bank Information");

  useEffect(() => {
    MedicalRecordServices.GET_ALL_MEDICAL_RECORD_INFO().then(response => {
      let data = [];
      response.data.forEach(e1 => {
        data.push({
          medicalRecordId: e1.medicalRecordId,
          doctorOfficeId: e1.doctorOfficeId,
          personid: e1.personid,
          amount: e1.amount,
          doctorName: e1.doctorName,
          description: e1.description
        });
        console.log(data);
      });
      setEntries({ data: data })
    })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleRowAdd = (newData, resolve) => {
    Axios.post('http://localhost:8080/app/medical-records/add-medical-record', newData)
      .then(res => {
        console.log(newData + "this is newData");
        let dataToAdd = [...entries.data]
        dataToAdd.push(newData);
        setEntries(dataToAdd)
        resolve();
        window.location.reload();
      })
  }

  const handleRowUpdate = (newData, oldData, resolve) => {
    Axios.put(`http://localhost:8080/app/medical-records/medical-record/${oldData.medicalRecordId}`)
      .then(res => {
        const dataUpdate = [...entries.data];
        const index = oldData.tabledata.medicalRecordId;
        console.log(index + "this is index")
        dataUpdate[index] = newData;
        setEntries([...dataUpdate]);
        resolve();
      })
      .catch(error => {
        console.log(error);
        resolve();
      });
  }

  const handleRowDelete = (oldData, resolve) => {
    console.log(oldData.tableData.autoTransactionId);
    Axios.delete(`http://localhost:8080/app/medical-records/medical-record/${oldData.medicalRecordId}`)
      .then(res => {
        const dataDelete = [...entries.data];
        const index = oldData.tableData.medicalRecordId;
        dataDelete.splice(index, 1);
        setEntries([...dataDelete]);
        resolve();
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <div>
      <Row>
        <Col md={4}>

        </Col>
        <Col md={4}>

        </Col>
        <Col md={2}>

        </Col>
        <Col md={2}>
          <ExportMedicalRecordCSV csvData={entries.data} fileName={fileName} />
        </Col>
      </Row>
      <br></br>
      <Box border={3} borderRadius={16}>
        <MaterialTable
          title="Medical Records"
          icons={tableIcons}
          columns={state.columns}
          data={entries.data}
          editable={{
            onRowAdd: (newData) =>
              new Promise((resolve) => {
                handleRowAdd(newData, resolve)
              }),
            // onRowUpdate: (newData, oldData) =>
            //   new Promise((resolve) => {
            //     handleRowUpdate(newData, oldData, resolve)
            //   }),
            onRowDelete: (oldData) =>
              new Promise((resolve) => {
                handleRowDelete(oldData, resolve)
              }),
          }}
        />
      </Box>
    </div>
  );
}