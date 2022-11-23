import { Modal, TouchableOpacity, Platform } from 'react-native';
import { Header, Input } from './styles';
import { Text } from '../Text';
import { Form, ModalBody, Overlay } from './styles';
import { Close } from '../Icons/Close';
import { Button } from '../Button';
import { useState } from 'react';

interface TableModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (table: string) => void;
}

export function TableModal({ visible, onClose, onSave }: TableModalProps) {
  const [table, setTable] = useState('');

  function handleSave() {
    onSave(table);
    onClose();
    setTable('');
  }

  return (
    <Modal transparent visible={visible} animationType="fade">
      <Overlay behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
        <ModalBody>
          <Header>
            <Text weight="500">Informe a mesa</Text>

            <TouchableOpacity onPress={onClose}>
              <Close color="#666" />
            </TouchableOpacity>
          </Header>

          <Form>
            <Input
              placeholder="Número da mesa"
              keyboardType="number-pad"
              onChangeText={setTable}
            />
            <Button onPress={handleSave} disabled={table.length === 0}>
              Salvar
            </Button>
          </Form>
        </ModalBody>
      </Overlay>
    </Modal>
  );
}
